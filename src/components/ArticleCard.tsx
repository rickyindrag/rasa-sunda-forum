import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  comments: number;
  views: number;
  image?: string;
}

const ArticleCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  publishDate, 
  readTime, 
  category, 
  comments, 
  views,
  image 
}: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-card border-border/50">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-sundanese-cream text-sundanese-brown">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {publishDate}
          </div>
        </div>
        
        <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
          <Link to={`/articles/${id}`}>
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {author}
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-1" />
              {comments}
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {views}
            </div>
          </div>
          
          <span className="text-sm text-muted-foreground">{readTime}</span>
        </div>
        
        <div className="mt-4">
          <Button variant="warm" size="sm" asChild>
            <Link to={`/articles/${id}`}>
              Read More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;