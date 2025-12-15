export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ethiopia LocalLens. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
