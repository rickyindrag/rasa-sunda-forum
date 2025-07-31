import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { dummyArticles } from "@/data/dummyData";
import { ArrowRight, BookOpen, Users, MessageCircle } from "lucide-react";

const Index = () => {
  const featuredArticles = dummyArticles.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-background via-sundanese-bamboo to-sundanese-mint overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sundanese-emerald/10 to-transparent"></div>
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Forum Budaya
            <span className="text-primary block mt-2">Sunda</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Menggali, melestarikan, dan berbagi kekayaan budaya Sunda untuk generasi masa depan. 
            Bergabunglah dalam diskusi tentang tradisi, bahasa, kuliner, dan filosofi hidup Sunda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="sundanese" className="text-lg px-8">
              Mulai Eksplorasi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="warm" className="text-lg px-8">
              Lihat Artikel
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Artikel Budaya</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-sundanese-emerald rounded-full flex items-center justify-center mx-auto mb-4 shadow-emerald">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">1,200+</h3>
              <p className="text-muted-foreground">Anggota Komunitas</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-sundanese-sage rounded-full flex items-center justify-center mx-auto mb-4 shadow-forest">
                <MessageCircle className="h-8 w-8 text-sundanese-forest" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">5,000+</h3>
              <p className="text-muted-foreground">Diskusi Aktif</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Artikel Pilihan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Temukan artikel-artikel menarik tentang budaya Sunda yang telah dikurasi khusus untuk Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                author={article.author}
                publishDate={article.publishDate}
                readTime={article.readTime}
                category={article.category}
                comments={article.comments.length}
                views={article.views}
                image={article.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Lihat Semua Artikel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-sundanese-forest to-sundanese-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sundanese-emerald/20 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            Bergabung dengan Komunitas Kami
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas yang peduli terhadap pelestarian budaya Sunda. 
            Berbagi cerita, belajar bersama, dan lestarikan warisan leluhur.
          </p>
          <Button size="lg" variant="sundanese" className="text-lg px-8">
            Daftar Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-foreground">Sundanese Forum</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Forum Budaya Sunda. Melestarikan warisan leluhur dengan bangga.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
