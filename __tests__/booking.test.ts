import { submitBooking } from '../src/app/actions/booking';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Mock dependencies
jest.mock('@supabase/supabase-js', () => {
  const insertMock = jest.fn();
  const selectMock = jest.fn();
  const singleMock = jest.fn();

  return {
    createClient: jest.fn(() => ({
      from: jest.fn(() => ({
        insert: insertMock.mockReturnValue({
          select: selectMock.mockReturnValue({
            single: singleMock,
          }),
        }),
      })),
    })),
    _insertMock: insertMock,
    _singleMock: singleMock,
  };
});

jest.mock('nodemailer', () => {
  const sendMailMock = jest.fn();
  return {
    createTransport: jest.fn(() => ({
      sendMail: sendMailMock,
    })),
    _sendMailMock: sendMailMock,
  };
});

describe('Denteq Courier Booking Logic (submitBooking)', () => {
  const mockEnv = {
    NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
    SUPABASE_SERVICE_ROLE_KEY: 'test-key',
    GMAIL_USER: 'test@gmail.com',
    GMAIL_APP_PASSWORD: 'app-password',
  };

  beforeEach(() => {
    process.env = { ...mockEnv };
    jest.clearAllMocks();

    const { _singleMock } = require('@supabase/supabase-js');
    _singleMock.mockResolvedValue({ data: { id: 'booking-123' }, error: null });
  });

  it('1. Successful Booking: inserts into DB and sends emails', async () => {
    const result = await submitBooking({
      firstName: 'Dr. Kevin',
      lastName: 'Easter',
      email: 'doctor@example.com',
      phone: '0999999999',
      city: 'Quito',
      mainStreet: 'Av Patria',
      crossStreet: 'Av Amazonas',
      houseNumber: 'N10-20',
      businessHours: '09:00 - 18:00',
      pickupDate: 'Lunes',
      question: 'Reparación de turbina',
      language: 'es'
    });

    const { _insertMock } = require('@supabase/supabase-js');
    const { _sendMailMock } = require('nodemailer');

    expect(result.success).toBe(true);

    // Verify DB insert with correct fields
    expect(_insertMock).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ 
          email: 'doctor@example.com', 
          city: 'Quito',
          status: 'pending' 
        })
      ])
    );

    // Verify Emails (2 emails: 1 to doctor, 1 to admin)
    expect(_sendMailMock).toHaveBeenCalledTimes(2);
    expect(_sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'doctor@example.com' })
    );
    expect(_sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'denteq.ec@gmail.com' })
    );
  });

  it('2. Bot honeypot: ignores submission and returns success', async () => {
    const { _insertMock } = require('@supabase/supabase-js');
    const { _sendMailMock } = require('nodemailer');

    const result = await submitBooking({
      botField: 'I am a bot',
      firstName: 'Spam',
      lastName: 'Bot',
      email: 'spam@bot.com',
    });

    expect(result.success).toBe(true);
    
    // DB and Emails should NOT be called
    expect(_insertMock).not.toHaveBeenCalled();
    expect(_sendMailMock).not.toHaveBeenCalled();
  });

  it('3. Supabase Failure: handles database errors properly', async () => {
    const { _singleMock } = require('@supabase/supabase-js');
    _singleMock.mockResolvedValueOnce({ data: null, error: { message: 'Database constraint error' } });

    const result = await submitBooking({
      firstName: 'Error',
      lastName: 'Doctor',
      email: 'error@example.com',
    });

    const { _sendMailMock } = require('nodemailer');

    expect(result.success).toBe(false);
    expect(result.error).toContain('Database constraint error');
    
    // Emails should NOT be sent if DB insert fails
    expect(_sendMailMock).not.toHaveBeenCalled();
  });
});
