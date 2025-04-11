
const testimonials = [
  {
    content: "ProfileCraft helped me land my dream job! The sleek design of my portfolio impressed the hiring manager during my interview.",
    author: "Sarah Johnson",
    role: "UX Designer at Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop",
  },
  {
    content: "As a freelance developer, having a professional portfolio is essential. ProfileCraft made it incredibly easy to showcase my projects.",
    author: "Michael Chen",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop",
  },
  {
    content: "I've tried several portfolio builders, but ProfileCraft stands out with its beautiful templates and ease of use. Highly recommend!",
    author: "Emily Rodriguez",
    role: "Graphic Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Loved by professionals</h2>
          <p className="text-lg text-gray-600">
            See what our users have to say about their experience with ProfileCraft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
