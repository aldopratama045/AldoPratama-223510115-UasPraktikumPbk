<template>
  <div class="container">
    <q-card class="weather-card">
      <q-card-section class="weather-header">
        <div class="text-h6">Cuaca</div>
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md row items-start">
          <q-input v-model="lokasi" label="Masukkan Lokasi" outlined dense class="input-field" />
          <q-btn color="primary" @click="ambilDataCuaca" label="Cari" class="q-ml-md search-button" />
        </div>
        <div v-if="dataDiambil" class="result-section">
          <div v-if="namaLokasi">
            <div class="location">Lokasi: {{ namaLokasi }}</div>
            <div class="temperature">Temperatur: {{ temperatur }}°C</div>
            <div class="description">Deskripsi: {{ deskripsiCuaca }}</div>
          </div>
          <div v-else class="error-message">Lokasi tidak ditemukan atau terjadi kesalahan.</div>
        </div>
        <div v-else-if="memuat" class="loading-message">Memuat data...</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'WeatherWidget',
  setup() {
    const lokasi = ref('');
    const namaLokasi = ref('');
    const deskripsiCuaca = ref('');
    const temperatur = ref(null);
    const memuat = ref(false);
    const dataDiambil = ref(false);

    const ambilDataCuaca = async () => {
      memuat.value = true;
      dataDiambil.value = false;
      namaLokasi.value = '';
      deskripsiCuaca.value = '';
      temperatur.value = null;

      try {
        const apiKey = 'c143780b0583857a4f7f630626278d43'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${lokasi.value}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        namaLokasi.value = response.data.name;
        deskripsiCuaca.value = response.data.weather[0].description;
        temperatur.value = response.data.main.temp;
      } catch (error) {
        console.error(error);
      } finally {
        memuat.value = false;
        dataDiambil.value = true;
      }
    };

    return {
      lokasi,
      namaLokasi,
      deskripsiCuaca,
      temperatur,
      memuat,
      dataDiambil,
      ambilDataCuaca
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4facfe, #00f2fe);
}

.weather-card {
  width: 400px;
  max-width: 90%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  background: #fff;
}

.weather-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.weather-header {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  border-radius: 15px 15px 0 0;
  padding: 15px;
  text-align: center;
  color: white;
}

.input-field {
  width: 70%;
}

.search-button {
  width: 20%;
}

.result-section {
  margin-top: 20px;
  text-align: center;
}

.location {
  color: #0072ff;
  font-weight: bold;
  font-size: 18px;
}

.temperature {
  color: #333;
  font-size: 24px;
  margin-top: 10px;
}

.description {
  color: #666;
  font-size: 16px;
  margin-top: 10px;
}

.error-message, .loading-message {
  color: #ff4d4d;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
}
</style>
