import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Gift, Users, BookOpen, Globe } from "lucide-react";

const Donate = () => {
  const donationTiers = [
    {
      name: "Sahabat Budaya",
      amount: "Rp 50,000",
      icon: Heart,
      color: "bg-sundanese-cream",
      benefits: [
        "Dukungan untuk konten bulanan",
        "Akses ke newsletter khusus",
        "Badge 'Sahabat Budaya' di profil"
      ]
    },
    {
      name: "Pelestari Tradisi",
      amount: "Rp 150,000", 
      icon: Star,
      color: "bg-sundanese-gold",
      benefits: [
        "Semua benefit Sahabat Budaya",
        "Akses early access artikel premium",
        "Undangan event komunitas",
        "Merchandise eksklusif"
      ],
      popular: true
    },
    {
      name: "Penjaga Warisan",
      amount: "Rp 500,000",
      icon: Gift,
      color: "bg-primary",
      benefits: [
        "Semua benefit sebelumnya",
        "Konsultasi 1-on-1 dengan ahli budaya",
        "Nama dicantumkan sebagai sponsor",
        "Akses perpustakaan digital premium"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Dukung <span className="text-primary">Pelestarian Budaya Sunda</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kontribusi Anda membantu kami terus melestarikan, mendokumentasikan, dan 
            menyebarkan kekayaan budaya Sunda untuk generasi mendatang.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-gradient-to-br from-sundanese-warm to-sundanese-cream">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">1,200+</h3>
              <p className="text-muted-foreground">Anggota Komunitas Terdampak</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-sundanese-cream to-accent">
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Artikel Budaya Dipublikasikan</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-accent to-sundanese-gold">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">15+</h3>
              <p className="text-muted-foreground">Negara Pembaca Konten Kami</p>
            </CardContent>
          </Card>
        </div>

        {/* Donation Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Pilih Tingkat Dukungan Anda
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative ${tier.popular ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-all duration-300`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Paling Populer
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-3xl font-bold text-primary">{tier.amount}</p>
                  <p className="text-sm text-muted-foreground">per bulan</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "sundanese" : "warm"}
                  >
                    Pilih Paket
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Ways to Support */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Cara Lain Mendukung Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Donasi Sekali</h3>
                <p className="text-muted-foreground mb-4">
                  Tidak siap untuk komitmen bulanan? Anda bisa memberikan dukungan sekali 
                  dengan nominal sesuai kemampuan.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Rp 25,000", "Rp 50,000", "Rp 100,000", "Rp 250,000"].map((amount) => (
                    <Button key={amount} variant="outline" size="sm">
                      {amount}
                    </Button>
                  ))}
                </div>
                <Button variant="warm" className="w-full">
                  Donasi Sekarang
                </Button>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Dukungan Non-Finansial</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Berbagi artikel di media sosial</li>
                  <li>• Menulis artikel untuk komunitas</li>
                  <li>• Menjadi volunteer untuk event</li>
                  <li>• Memberikan feedback dan saran</li>
                  <li>• Mengenalkan teman ke komunitas</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transparency */}
        <Card className="bg-gradient-to-r from-primary to-sundanese-brown text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Transparansi Penggunaan Dana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">60%</h3>
                <p>Pengembangan Konten & Riset</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">25%</h3>
                <p>Infrastruktur & Teknologi</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">15%</h3>
                <p>Event & Program Komunitas</p>
              </div>
            </div>
            <p className="text-center mt-6 text-primary-foreground/90">
              Kami berkomitmen untuk transparan dalam penggunaan setiap rupiah donasi yang masuk.
              Laporan keuangan tersedia setiap bulan untuk para donatur.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;
