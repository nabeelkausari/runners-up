import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Users, Star } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import data from '../data/miniature.json';
import { formatINR } from '@/utils/currency';

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category?: string;
  students?: number;
  originalPrice?: number;
}

const Index = () => {
  const navigate = useNavigate();

  // Get featured courses (rating >= 4) and add missing properties
  const featuredCourses = data.products
    .filter((course) => course.ratings >= 4)
    .slice(0, 4)
    .map(course => ({
      ...course,
      category: 'Course',
      students: Math.floor(Math.random() * 1000) + 100, // Random number of students
      originalPrice: Math.round(course.currentPrice * (1.2 + Math.random() * 0.3)) // Add 20-50% to price for original price
    }));

  // Get latest courses and add missing properties
  const newCourses = data.products
    .slice(-4)
    .map(course => ({
      ...course,
      category: 'New',
      students: Math.floor(Math.random() * 500) + 50, // Random number of students
      originalPrice: Math.round(course.currentPrice * (1.1 + Math.random() * 0.2)) // Add 10-30% to price for original price
    }));

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      <Navbar />
      <main className="flex-grow">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <p className="text-blue-600 text-lg mb-4 font-medium">
              Welcome to Edu-Madi 🎓
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Learn Without Limits
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Access high-quality courses, expert instructors, and a supportive learning community.
              Start your educational journey today and unlock your full potential.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => navigate('/courses')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-colors flex items-center gap-2"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-600">Courses</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-600">50K+</h3>
                <p className="text-gray-600">Students</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600">200+</h3>
                <p className="text-gray-600">Instructors</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-pink-600">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Students learning together"
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose Edu-Madi?
            </h2>
            <p className="text-lg text-gray-600">
              We provide the best learning experience with our innovative platform and expert instructors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry experts with years of experience in their fields.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Interactive Learning</h3>
              <p className="text-gray-600">Engage with interactive content, quizzes, and hands-on projects.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Support</h3>
              <p className="text-gray-600">Join a community of learners and get support from peers and mentors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Popular Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our most popular courses designed to help you grow your skills and advance your career.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="h-48 bg-gray-100 overflow-hidden relative">
                  <img
                    src={course.image || 'https://images.unsplash.com/photo-1498050108023-c5249f9dfcd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {course.category || 'Course'}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(course.ratings) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {course.ratings.toFixed(1)} ({course.students || 100}+)
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {course.title || 'Comprehensive course covering all essential topics.'}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-blue-600 font-bold text-lg">
                        {course.currentPrice === 0 ? 'Free' : formatINR(course.currentPrice)}
                      </span>
                      {course.originalPrice && course.originalPrice > 0 && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          {formatINR(course.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                      onClick={() => navigate(`/courses/${course.id}`)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              // className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-base font-medium rounded-lg transition-all"
              className="px-8 py-6 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              onClick={() => navigate('/courses')}
            >
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are advancing their careers with our courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-xl"
              onClick={() => navigate('/login')}
            >
              Get Started for Free
            </Button>
            <Button
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-xl"
              onClick={() => navigate('/courses')}
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      

      {/* New Arrivals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
              <p className="text-gray-600 mt-2">Check out our latest courses</p>
            </div>
            <Button
              variant="outline"
              // className="border-blue-600 text-blue-600 hover:bg-blue-50"
              className="px-8 py-6 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              onClick={() => navigate('/courses')}
            >
              View All Courses
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={course.image || 'https://images.unsplash.com/photo-1498050108023-c5249f9dfcd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(course.ratings) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({course.ratings.toFixed(1)})
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.title}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">₹{course.currentPrice}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Hear from our community of successful learners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'Web Developer',
                content: 'Edu-Madi transformed my career. The courses are well-structured and the instructors are top-notch!',
                rating: 5
              },
              {
                name: 'Sarah Williams',
                role: 'UX Designer',
                content: 'The hands-on projects helped me build a strong portfolio that got me hired within a month of completing the course.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Data Scientist',
                content: 'The community support and mentorship I received were invaluable. Highly recommend to anyone looking to upskill.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Index;
