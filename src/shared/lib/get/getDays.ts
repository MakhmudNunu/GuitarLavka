const getDaysAgo = (createdAd: string) => {
    const createdDate = new Date(createdAd);
    const today = new Date();

    // Разница в миллисекундах
    const diffTime = Math.abs(today.getTime() - createdDate.getTime());

    // Переводим миллисекунды в дни
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `${diffDays} ${getDayLabel(diffDays)} назад, просмотрено `;
};

// Функция для склонения слова "день"
const getDayLabel = (days: number) => {
    if (days % 10 === 1 && days % 100 !== 11) return 'день';
    if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) return 'дня';
    return 'дней';
};

export { getDaysAgo, getDayLabel };