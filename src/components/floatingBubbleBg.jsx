const floatingBubbleBg = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`bubble-animation absolute rounded-full backdrop-blur-sm
                ${i % 2 === 0 ? 'bubble-delay-1' : 'bubble-delay-2'}`}
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDuration: `${Math.random() * 5 + 10}s`,
                background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(168, 213, 163, 0.2))'
              }}
            />
          ))}
        </div>
  )
}

export default floatingBubbleBg