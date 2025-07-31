import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { dummyArticles } from "@/data/dummyData";
import { Calendar, User, MessageCircle, Eye, Heart, Share2, Reply } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import type { Comment } from "@/data/dummyData";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = dummyArticles.find(a => a.id === id);
  const [newComment, setNewComment] = useState("");
  const [newCommentAuthor, setNewCommentAuthor] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
          <Link to="/articles" className="text-primary hover:underline">
            Kembali ke halaman artikel
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmitComment = () => {
    if (newComment.trim() && newCommentAuthor.trim()) {
      // In a real app, this would be sent to a backend
      console.log("New comment:", { author: newCommentAuthor, content: newComment });
      setNewComment("");
      setNewCommentAuthor("");
    }
  };

  const CommentComponent = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => (
    <Card className={`${isReply ? 'ml-8 mt-4' : 'mt-4'} bg-card border-border/50`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-semibold">
                {comment.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-semibold text-sm">{comment.author}</p>
              <p className="text-xs text-muted-foreground">{comment.publishDate}</p>
            </div>
          </div>
          {!isReply && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
            >
              <Reply className="h-4 w-4 mr-1" />
              Balas
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-foreground">{comment.content}</p>
        
        {replyTo === comment.id && (
          <div className="mt-4 space-y-3 p-4 bg-muted rounded-lg">
            <Input
              placeholder="Nama Anda"
              value={newCommentAuthor}
              onChange={(e) => setNewCommentAuthor(e.target.value)}
            />
            <Textarea
              placeholder="Tulis balasan Anda..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex space-x-2">
              <Button variant="sundanese" size="sm" onClick={handleSubmitComment}>
                Kirim Balasan
              </Button>
              <Button variant="outline" size="sm" onClick={() => setReplyTo(null)}>
                Batal
              </Button>
            </div>
          </div>
        )}
        
        {comment.replies && comment.replies.map((reply) => (
          <CommentComponent key={reply.id} comment={reply} isReply={true} />
        ))}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="secondary" className="bg-sundanese-cream text-sundanese-brown">
              {article.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {article.publishDate}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {article.views}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-1" />
              Suka
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-1" />
              Bagikan
            </Button>
            <span className="text-sm text-muted-foreground">{article.readTime}</span>
          </div>
        </div>

        {/* Article Image */}
        {article.image && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-12 text-foreground"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Comments Section */}
        <section className="mt-16 border-t pt-8">
          <div className="flex items-center space-x-2 mb-6">
            <MessageCircle className="h-5 w-5" />
            <h2 className="text-2xl font-bold">
              Komentar ({article.comments.length})
            </h2>
          </div>

          {/* Add Comment Form */}
          <Card className="mb-8">
            <CardHeader>
              <h3 className="text-lg font-semibold">Tambahkan Komentar</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Nama Anda"
                value={newCommentAuthor}
                onChange={(e) => setNewCommentAuthor(e.target.value)}
              />
              <Textarea
                placeholder="Tulis komentar Anda..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
              />
              <Button variant="sundanese" onClick={handleSubmitComment}>
                Kirim Komentar
              </Button>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {article.comments.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                Belum ada komentar. Jadilah yang pertama berkomentar!
              </p>
            ) : (
              article.comments.map((comment) => (
                <CommentComponent key={comment.id} comment={comment} />
              ))
            )}
          </div>
        </section>

        {/* Back to Articles */}
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/articles">
              ← Kembali ke Artikel
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;