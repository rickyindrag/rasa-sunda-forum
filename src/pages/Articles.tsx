import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { dummyArticles, categories } from "@/data/dummyData";
import { Search } from "lucide-react";
import { useState } from "react";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = dummyArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Artikel Budaya Sunda</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jelajahi koleksi artikel tentang budaya, tradisi, dan kearifan lokal Sunda
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={selectedCategory === "All" ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory("All")}
            >
              Semua
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
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

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Tidak ada artikel yang ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;