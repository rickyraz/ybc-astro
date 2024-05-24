type SpesifikasiMotor = {
  judul: string;
  deskripsi: string;
};

function parseSpesifikasi(data: string): SpesifikasiMotor[] {
  const baris = data.split("\n");
  const spesifikasi: SpesifikasiMotor[] = [];

  for (let i = 1; i < baris.length; i++) {
    const barisData = baris[i].trim();
    const [judul, deskripsi] = barisData.split(";");
    spesifikasi.push({
      judul: judul.trim(),
      deskripsi: deskripsi.trim(),
    });
  }

  return spesifikasi;
}

// import React from "react";

// interface SpesifikasiMotor {
//   judul: string;
//   deskripsi: string;
// }

// const TabelSpesifikasi = ({ spesifikasi }: { spesifikasi: SpesifikasiMotor[] }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Judul</th>
//           <th>Deskripsi</th>
//         </tr>
//       </thead>
//       <tbody>
//         {spesifikasi.map((spesifikasiMotor) => (
//           <tr key={spesifikasiMotor.judul}>
//             <td>{spesifikasiMotor.judul}</td>
//             <td>{spesifikasiMotor.deskripsi}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TabelSpesifikasi;

// --- || ---------------------------------------

// import React from 'react';
// import TabelSpesifikasi from './TabelSpesifikasi';

// const dataSpesifikasi = `Tipe Mesin;Liquid cooled 4-stroke, SOHC , VVA\nJumlah/Posisi Silinder;Single Cylinder\nVolume Silinder;155.09 cc\nDiameter x Langkah;58 mm x 58.7 mm\nPerbandingan Kompresi;11.6 : 1\nDaya Maksimum;11.3 kW / 8000 rpm\nTorsi Maksimum;13.9 Nm / 6500 rpm\nSistem Starter;Electric Starter\nSistem Pelumasan;Wet Sump\nKapasitas Oli Mesin;0,9 L (Periodical Change)\nSistem Bahan Bakar;Fuel Injection\nTipe Kopling;Single Dry Clucth\nTipe Transmisi;Automatic`;

// const spesifikasiMotor = parseSpesifikasi(dataSpesifikasi);

// const App = () => {
//   return (
//     <div>
//       <h1>Spesifikasi Motor</h1>
//       <TabelSpesifikasi spesifikasi={spesifikasiMotor} />
//     </div>
//   );
// };

// export default App;
