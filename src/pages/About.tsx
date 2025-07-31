import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tentang <span className="text-primary">Forum Budaya Sunda</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami adalah komunitas yang berdedikasi untuk melestarikan, menggali, dan berbagi 
            kekayaan budaya Sunda untuk generasi masa depan.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-sundanese-warm to-sundanese-cream border-sundanese-cream">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 mr-3 text-primary" />
                Misi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Melestarikan warisan budaya Sunda melalui dokumentasi digital, diskusi komunitas, 
                dan edukasi yang berkelanjutan. Kami berkomitmen untuk menjembatani tradisi 
                dengan modernitas agar budaya Sunda tetap hidup dan relevan.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sundanese-cream to-accent border-accent">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="h-6 w-6 mr-3 text-primary" />
                Visi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi platform terdepan dalam pelestarian budaya Sunda yang menginspirasi 
                generasi muda untuk mencintai dan melestarikan warisan leluhur, sekaligus 
                menjadi rujukan global untuk studi budaya Sunda.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Silih Asih</h3>
              <p className="text-muted-foreground">
                Saling mengasihi dan menghormati dalam setiap interaksi komunitas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sundanese-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Silih Asah</h3>
              <p className="text-muted-foreground">
                Saling mendidik dan berbagi pengetahuan tentang budaya Sunda
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sundanese-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-sundanese-brown" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Silih Asuh</h3>
              <p className="text-muted-foreground">
                Saling mengasuh dan mendampingi dalam perjalanan belajar budaya
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Cerita Kami</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center mb-6">
              Forum Budaya Sunda lahir dari keresahan akan semakin memudarnya pemahaman 
              generasi muda terhadap budaya Sunda. Dimulai sebagai inisiatif kecil oleh 
              sekelompok pencinta budaya, kini kami telah berkembang menjadi komunitas 
              yang terdiri dari ribuan anggota dari berbagai kalangan.
            </p>
            <p className="text-center mb-6">
              Kami percaya bahwa budaya adalah akar yang memberikan identitas dan kekuatan 
              pada suatu bangsa. Melalui platform digital ini, kami berupaya membuat 
              budaya Sunda dapat diakses, dipahami, dan dicintai oleh siapa saja, 
              di mana saja, kapan saja.
            </p>
            <p className="text-center">
              Bergabunglah dengan kami dalam misi mulia ini. Mari bersama-sama 
              melestarikan warisan leluhur untuk generasi yang akan datang.
            </p>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="text-center bg-gradient-to-r from-primary to-sundanese-brown rounded-xl p-8 text-primary-foreground">
          <h2 className="text-2xl font-bold mb-4">Mari Berkolaborasi</h2>
          <p className="mb-6">
            Punya ide, saran, atau ingin berkontribusi? Kami terbuka untuk kolaborasi 
            dan selalu senang mendengar dari komunitas.
          </p>
          <p className="font-semibold">
            Email: info@forumbudayasunda.id | WhatsApp: +62 812-3456-7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;