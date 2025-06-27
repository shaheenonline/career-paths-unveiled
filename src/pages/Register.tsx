
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Eye, EyeOff, Mail, Lock, User, Building, Phone, MapPin, Globe } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('seeker'); // 'seeker' or 'provider'
  
  // Service Seeker Form Data
  const [seekerData, setSeekerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  // Service Provider Form Data
  const [providerData, setProviderData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    website: '',
    address: '',
    city: '',
    businessType: '',
    serviceDescription: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = userType === 'seeker' ? seekerData : providerData;
    console.log('Registration attempt:', { userType, ...formData });
  };

  const handleSeekerChange = (field: string, value: string | boolean) => {
    setSeekerData(prev => ({ ...prev, [field]: value }));
  };

  const handleProviderChange = (field: string, value: string | boolean) => {
    setProviderData(prev => ({ ...prev, [field]: value }));
  };

  const renderSeekerForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
            First Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              value={seekerData.firstName}
              onChange={(e) => handleSeekerChange('firstName', e.target.value)}
              className="pl-10 h-11 border-gray-200 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={seekerData.lastName}
            onChange={(e) => handleSeekerChange('lastName', e.target.value)}
            className="h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={seekerData.email}
            onChange={(e) => handleSeekerChange('email', e.target.value)}
            className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={seekerData.phone}
            onChange={(e) => handleSeekerChange('phone', e.target.value)}
            className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="text-sm font-medium text-gray-700">
          Location
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="location"
            type="text"
            placeholder="City, State"
            value={seekerData.location}
            onChange={(e) => handleSeekerChange('location', e.target.value)}
            className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create password"
              value={seekerData.password}
              onChange={(e) => handleSeekerChange('password', e.target.value)}
              className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Confirm Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              value={seekerData.confirmPassword}
              onChange={(e) => handleSeekerChange('confirmPassword', e.target.value)}
              className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Terms and Newsletter */}
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={seekerData.agreeToTerms}
            onCheckedChange={(checked) => handleSeekerChange('agreeToTerms', checked as boolean)}
            className="mt-0.5"
          />
          <Label htmlFor="terms" className="text-sm text-gray-600 leading-5">
            I agree to the{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </Link>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={seekerData.subscribeNewsletter}
            onCheckedChange={(checked) => handleSeekerChange('subscribeNewsletter', checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm text-gray-600">
            Subscribe to service updates and recommendations
          </Label>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-medium"
        disabled={!seekerData.agreeToTerms}
      >
        Create Service Seeker Account
      </Button>
    </form>
  );

  const renderProviderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
          Company Name
        </Label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="companyName"
            type="text"
            placeholder="Your Company Name"
            value={providerData.companyName}
            onChange={(e) => handleProviderChange('companyName', e.target.value)}
            className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactPerson" className="text-sm font-medium text-gray-700">
          Contact Person
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="contactPerson"
            type="text"
            placeholder="Full Name"
            value={providerData.contactPerson}
            onChange={(e) => handleProviderChange('contactPerson', e.target.value)}
            className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Business Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="email"
            type="email"
            placeholder="business@company.com"
            value={providerData.email}
            onChange={(e) => handleProviderChange('email', e.target.value)}
            className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={providerData.phone}
              onChange={(e) => handleProviderChange('phone', e.target.value)}
              className="pl-10 h-11 border-gray-200 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="website" className="text-sm font-medium text-gray-700">
            Website (Optional)
          </Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="website"
              type="url"
              placeholder="https://yourwebsite.com"
              value={providerData.website}
              onChange={(e) => handleProviderChange('website', e.target.value)}
              className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Business Address
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            id="address"
            type="text"
            placeholder="Street Address"
            value={providerData.address}
            onChange={(e) => handleProviderChange('address', e.target.value)}
            className="pl-10 h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
            City
          </Label>
          <Input
            id="city"
            type="text"
            placeholder="City"
            value={providerData.city}
            onChange={(e) => handleProviderChange('city', e.target.value)}
            className="h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">
            Business Type
          </Label>
          <Input
            id="businessType"
            type="text"
            placeholder="e.g., Marketing Agency"
            value={providerData.businessType}
            onChange={(e) => handleProviderChange('businessType', e.target.value)}
            className="h-11 border-gray-200 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceDescription" className="text-sm font-medium text-gray-700">
          Service Description
        </Label>
        <Textarea
          id="serviceDescription"
          placeholder="Describe the services you offer..."
          value={providerData.serviceDescription}
          onChange={(e) => handleProviderChange('serviceDescription', e.target.value)}
          className="min-h-[80px] border-gray-200 focus:border-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create password"
              value={providerData.password}
              onChange={(e) => handleProviderChange('password', e.target.value)}
              className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Confirm Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              value={providerData.confirmPassword}
              onChange={(e) => handleProviderChange('confirmPassword', e.target.value)}
              className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Terms and Newsletter */}
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={providerData.agreeToTerms}
            onCheckedChange={(checked) => handleProviderChange('agreeToTerms', checked as boolean)}
            className="mt-0.5"
          />
          <Label htmlFor="terms" className="text-sm text-gray-600 leading-5">
            I agree to the{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </Link>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={providerData.subscribeNewsletter}
            onCheckedChange={(checked) => handleProviderChange('subscribeNewsletter', checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm text-gray-600">
            Subscribe to business insights and opportunities
          </Label>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-medium"
        disabled={!providerData.agreeToTerms}
      >
        Create Service Provider Account
      </Button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join TrueFirms</h1>
          <p className="text-gray-600">Create your account and start connecting with {userType === 'seeker' ? 'trusted service providers' : 'potential clients'}</p>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-xl font-semibold text-gray-900">Choose Your Account Type</CardTitle>
            <CardDescription className="text-gray-600">
              Select how you want to use TrueFirms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* User Type Selection */}
            <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setUserType('seeker')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all ${
                  userType === 'seeker'
                    ? 'bg-white shadow-sm text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="h-4 w-4" />
                Service Seeker
              </button>
              <button
                type="button"
                onClick={() => setUserType('provider')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all ${
                  userType === 'provider'
                    ? 'bg-white shadow-sm text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Building className="h-4 w-4" />
                Service Provider
              </button>
            </div>

            {userType === 'seeker' ? renderSeekerForm() : renderProviderForm()}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12 border-gray-200 hover:bg-gray-50">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="h-12 border-gray-200 hover:bg-gray-50">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
                LinkedIn
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign In
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
