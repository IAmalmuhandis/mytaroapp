export const NigeriaNaira = new Intl.NumberFormat('en-Ng', {
    style: 'currency',
    currency: 'NGN',
    currencyDisplay: 'symbol'
})

export function getTodayDate() {
    // Get today's date
    const today = new Date();
    // Get the year, month, and day
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    // Format the date
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}