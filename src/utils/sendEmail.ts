import { ContactFormData } from '@components/ContactForm';

export async function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/email';
  const res = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      return response.message;
    })
    .catch((err) => {
      return err;
    });

  return res;
}
