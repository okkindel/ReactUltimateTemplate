import ky from 'ky';

export const httpClient = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  hooks: {
    beforeRequest: [
      (request): void => {
        /** Add Authorization header with Bearer token */
        const token = localStorage.getItem('token');
        if (!!token) request.headers.set('Authorization', `Bearer ${token}`);
      },
    ],
  },
});
