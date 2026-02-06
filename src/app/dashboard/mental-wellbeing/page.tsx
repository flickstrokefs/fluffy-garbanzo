'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Smile, Meh, Frown, Award, MessageSquare } from 'lucide-react';

const quizQuestions = [
  {
    id: 'feeling',
    question: 'How have you been feeling emotionally this week?',
    options: [
      { value: 'happy', label: 'Happy', icon: <Smile className="w-5 h-5 text-green-500" /> },
      { value: 'neutral', label: 'Okay', icon: <Meh className="w-5 h-5 text-yellow-500" /> },
      { value: 'sad', label: 'Struggling', icon: <Frown className="w-5 h-5 text-red-500" /> },
    ],
  },
  {
    id: 'stress',
    question: 'How would you rate your academic stress levels?',
    options: [
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Manageable' },
      { value: 'high', label: 'Overwhelming' },
    ],
  },
  {
    id: 'sleep',
    question: 'Are you getting enough quality sleep?',
    options: [
        { value: 'yes', label: 'Yes, I feel rested' },
        { value: 'somewhat', label: 'Somewhat' },
        { value: 'no', label: 'No, I feel tired' },
    ],
  },
   {
    id: 'social',
    question: 'How connected do you feel to your friends and peers?',
    options: [
      { value: 'connected', label: 'Very Connected' },
      { value: 'neutral', label: 'A Little' },
      { value: 'disconnected', label: 'Not at all' },
    ],
  },
];

export default function MentalWellbeingPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({ ...prev, [quizQuestions[currentQuestionIndex].id]: value }));
  };

  const handleNext = () => {
    if (!answers[quizQuestions[currentQuestionIndex].id]) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) {
        toast({
            title: "Please enter your feedback.",
            variant: "destructive"
        });
        return;
    }
    console.log('Feedback submitted:', { answers, feedback });
    toast({
      title: 'Thank you for your feedback!',
      description: 'Your thoughts are valuable to us.',
    });
    setFeedback('');
    setAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
  };
  
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
    return (
      <div className="flex flex-col gap-8 items-center text-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full">
              <Award className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl pt-4">Quiz Completed!</CardTitle>
            <CardDescription>Thank you for taking the time to check in with yourself. Your wellbeing is important.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitFeedback} className="space-y-4 text-left">
              <h3 className="font-semibold flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary"/>
                Share More (Optional)
              </h3>
              <p className="text-sm text-muted-foreground">If you're comfortable, please share any specifics about academic stress or health issues you're facing. This is confidential.</p>
              <Textarea
                placeholder="Tell us what's on your mind..."
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                rows={4}
              />
              <Button type="submit">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Wellbeing Check-in</h1>
        <p className="text-muted-foreground">A quick, gamified quiz for your mental and emotional health.</p>
      </div>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <div className="w-full bg-muted rounded-full h-2.5">
             <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
          </div>
          <CardTitle className="font-headline pt-4">{quizQuestions[currentQuestionIndex].question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            onValueChange={handleAnswerChange}
            value={answers[quizQuestions[currentQuestionIndex].id]}
            className="space-y-2"
          >
            {quizQuestions[currentQuestionIndex].options.map(option => (
              <Label
                key={option.value}
                htmlFor={option.value}
                className="flex items-center space-x-3 p-4 border rounded-md cursor-pointer hover:bg-accent has-[:checked]:bg-primary/10 has-[:checked]:border-primary"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                {option.icon}
                <span>{option.label}</span>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} className="w-full">
            {currentQuestionIndex < quizQuestions.length - 1 ? 'Next' : 'Finish Quiz'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
