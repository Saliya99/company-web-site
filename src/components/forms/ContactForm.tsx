'use client';

import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/Button';
import { ContactForm as ContactFormType } from '@/types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    message: '',
  });

  const { submitForm, isSubmitting, isSuccess, error, reset } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <h3 className="text-lg font-medium text-green-800">Message Sent!</h3>
        <p className="mt-2 text-green-700">We'll get back to you soon.</p>
        <Button onClick={reset} className="mt-4" variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}