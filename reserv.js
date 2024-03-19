function calculateTotal() {
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;
    const guests = parseInt(document.getElementById('guests').value);
    // Lakukan perhitungan biaya berdasarkan tanggal check-in, check-out, dan jumlah tamu
    // Misalnya, hitung total biaya menginap, diskon, biaya bersih, dan biaya layanan
    const totalBeforeTaxes = calculateTotalBeforeTaxes(checkInDate, checkOutDate, guests);
    
    // Update informasi harga pada card
    document.getElementById('total-price').textContent = `Rp${totalBeforeTaxes}`;
    // Update informasi harga per malam
    document.getElementById('nightly-rate').textContent = `Rp2,591,949 x 8 nights`;
    // Update informasi total malam menginap
    document.getElementById('total-nights').textContent = `Rp20,735,592`;
    // Update informasi diskon mingguan
    document.getElementById('discount').textContent = `-Rp2,073,560`;
    // Update informasi biaya bersih
    document.getElementById('cleaning-fee').textContent = `Rp741,829`;
    // Update informasi biaya layanan Airbnb
    document.getElementById('service-fee').textContent = `Rp3,040,712`;
    // Update informasi total sebelum pajak
    document.getElementById('total-before-taxes').textContent = `Rp22,444,573`;

    // Ubah pesan informasi pembayaran
    document.getElementById('charge-info').textContent = "You won't be charged yet";
}

function calculateTotalBeforeTaxes(checkInDate, checkOutDate, guests) {
    // Implementasikan logika perhitungan total biaya sebelum pajak di sini
    // Misalnya, hitung total berdasarkan harga per malam, jumlah malam menginap, dan jumlah tamu
    const nightlyRate = 2591949; // Harga per malam
    const totalNights = calculateNightDifference(checkInDate, checkOutDate); // Hitung total malam menginap
    const totalBeforeTaxes = nightlyRate * totalNights;

    return totalBeforeTaxes.toLocaleString();
}

function calculateNightDifference(checkInDate, checkOutDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik
    const firstDate = new Date(checkInDate);
    const secondDate = new Date(checkOutDate);
    const nightDifference = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return nightDifference;
}
