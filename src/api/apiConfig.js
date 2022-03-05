const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e066ada297c1f749da1194e1811d27ce',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;