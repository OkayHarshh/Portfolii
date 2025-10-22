import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML portfolio
    window.location.href = "/portfolio.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Redirecting...</h1>
        <p className="text-xl text-muted-foreground">
          If you're not redirected, <a href="/portfolio.html" className="text-primary underline">click here</a>
        </p>
      </div>
    </div>
  );
};

export default Index;
