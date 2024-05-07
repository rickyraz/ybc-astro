import React from "react";

function Welcome() {
  return (
    <section className="bg-medium-gray py-14 mb-8">
      <div className="max-w-6xl mx-auto flex">
        <div className="w-2/3 space-y-3">
          <h2 className="text-3xl text-[#0C1D5A] font-bold">
            Selamat Datang di Dealer Resmi Yamaha <br /> Bahana Ciamis
          </h2>
          <p>
            Selamat datang di situs resmi dealer Yamaha Bahana Ciamis. Sebagai
            dealer resmi Yamaha, kami melayani pembelian sepeda motor baik
            secara tunai maupun kredit untuk area Garut, Tasik, Bandung,
            Sumedang, dan sekitarnya. Kami berkomitmen untuk memudahkan para
            pelanggan setia Yamaha dalam memperoleh produk yang kami sediakan
            melalui layanan online yang praktis. Nikmati proses pemesanan yang
            cepat, mudah, aman, dan nyaman tanpa perlu repot mengunjungi dealer
            atau menggunakan transportasi.
          </p>
        </div>
        <div className="w-1/3 flex justify-end">
          <div className="bg-blue-300 h-[240px] w-[270px] rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
