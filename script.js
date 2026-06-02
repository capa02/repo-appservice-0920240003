async function hitungBiaya(){

    const acara = document.getElementById("acara").value;
    const jumlah = document.getElementById("jumlah").value;
    const jenis = document.getElementById("jenis").value;

    const url = `https://NAMAFUNCTIONKAMU.azurewebsites.net/api/EstimasiBiaya?acara=${acara}&jumlah=${jumlah}&jenis=${jenis}`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("hasil").innerHTML = `
        <h3>Hasil Estimasi</h3>
        <p><b>Acara:</b> ${data.acara}</p>
        <p><b>Peserta:</b> ${data.jumlahPeserta}</p>
        <p><b>Konsumsi:</b> ${data.jenisKonsumsi}</p>
        <p><b>Total:</b> Rp ${data.totalBiaya}</p>
    `;
}
