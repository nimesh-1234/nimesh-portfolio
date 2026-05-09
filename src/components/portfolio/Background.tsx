export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-[40%] right-[-10%] h-[600px] w-[600px] rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}