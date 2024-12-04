document.getElementById('calculateBtn').addEventListener('click', function() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const heightInCm = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(heightInCm) || heightInCm <= 0) {
        alert('Silakan masukkan nilai yang valid untuk berat dan tinggi.');
        return;
    }

    // Konversi tinggi dari cm ke m
    const heightInM = heightInCm / 100;
    const bmi = weight / (heightInM * heightInM);
    const bmiResult = document.getElementById('bmiResult');
    const bmiCategory = document.getElementById('bmiCategory');

    bmiResult.textContent = `BMI Anda: ${bmi.toFixed(2)}`;

    // Kategori BMI
    if (bmi < 18.5) {
        bmiCategory.textContent = 'Kategori: Kurang berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory.textContent = 'Kategori: Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory.textContent = 'Kategori: Kelebihan berat badan';
    } else {
        bmiCategory.textContent = 'Kategori: Obesitas';
    }
    // Menampilkan hasil setelah perhitungan
    document.querySelector('.result-section').style.display = 'flex';
});