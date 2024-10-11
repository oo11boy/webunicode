
export const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://uninew.liara.run/api'
    : 'http://localhost:3000/api'