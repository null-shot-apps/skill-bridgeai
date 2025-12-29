'use client';

import { useState } from 'react';

type CareerPath = 'product-management' | 'ui-ux-design' | 'data-analytics';

interface SkillGap {
  skill: string;
  importance: 'critical' | 'important' | 'nice-to-have';
  currentLevel: number;
  targetLevel: number;
}

interface LearningStep {
  title: string;
  description: string;
  duration: string;
  resources: string[];
}

interface TransferableSkill {
  skill: string;
  relevance: string;
}

interface AnalysisResult {
  targetRole: string;
  transferableSkills: TransferableSkill[];
  skillGaps: SkillGap[];
  learningPath: LearningStep[];
  estimatedTimeline: string;
}

export default function CareerTransitionAssistant() {
  const [step, setStep] = useState<'input' | 'analyzing' | 'results'>('input');
  const [currentRole, setCurrentRole] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [targetPath, setTargetPath] = useState<CareerPath>('product-management');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const analyzeCareerTransition = () => {
    setStep('analyzing');
    
    // Simulate AI analysis
    setTimeout(() => {
      const results: Record<CareerPath, AnalysisResult> = {
        'product-management': {
          targetRole: 'Product Manager',
          transferableSkills: [
            { skill: 'Customer Research & Insights', relevance: 'Essential for understanding user needs and market fit' },
            { skill: 'Stakeholder Communication', relevance: 'Critical for aligning teams and managing expectations' },
            { skill: 'Campaign Strategy & Planning', relevance: 'Directly maps to product roadmap planning' },
            { skill: 'Data-Driven Decision Making', relevance: 'Core PM skill for prioritization and metrics' },
            { skill: 'Cross-functional Collaboration', relevance: 'Working with engineering, design, and business teams' },
          ],
          skillGaps: [
            { skill: 'Technical Understanding (APIs, Databases)', importance: 'critical', currentLevel: 2, targetLevel: 7 },
            { skill: 'Agile/Scrum Methodologies', importance: 'critical', currentLevel: 3, targetLevel: 8 },
            { skill: 'Product Analytics Tools (Mixpanel, Amplitude)', importance: 'important', currentLevel: 1, targetLevel: 7 },
            { skill: 'Wireframing & Prototyping', importance: 'important', currentLevel: 2, targetLevel: 6 },
            { skill: 'SQL for Data Analysis', importance: 'important', currentLevel: 1, targetLevel: 6 },
            { skill: 'A/B Testing & Experimentation', importance: 'nice-to-have', currentLevel: 4, targetLevel: 7 },
          ],
          learningPath: [
            {
              title: 'Phase 1: Technical Foundations (Weeks 1-4)',
              description: 'Build basic technical literacy to communicate effectively with engineering teams',
              duration: '4 weeks',
              resources: [
                'Complete "How the Internet Works" course on Khan Academy',
                'Learn SQL basics on Mode Analytics SQL Tutorial',
                'Read "The Non-Technical Guide to APIs" by Zapier',
                'Practice: Set up a simple database and write 10 SQL queries',
              ],
            },
            {
              title: 'Phase 2: Product Management Fundamentals (Weeks 5-10)',
              description: 'Master core PM frameworks and methodologies',
              duration: '6 weeks',
              resources: [
                'Take "Product Management 101" on Udemy or Coursera',
                'Read "Inspired" by Marty Cagan',
                'Complete Scrum.org Professional Scrum Product Owner certification',
                'Practice: Create 3 product requirement documents (PRDs) for existing products',
              ],
            },
            {
              title: 'Phase 3: Analytics & Data Skills (Weeks 11-14)',
              description: 'Learn to measure product success and make data-informed decisions',
              duration: '4 weeks',
              resources: [
                'Complete Google Analytics certification',
                'Learn Mixpanel or Amplitude through their free courses',
                'Study A/B testing fundamentals on Optimizely Academy',
                'Practice: Analyze 5 real product features and propose metrics',
              ],
            },
            {
              title: 'Phase 4: Design & User Experience (Weeks 15-18)',
              description: 'Develop skills to collaborate with designers and validate ideas',
              duration: '4 weeks',
              resources: [
                'Learn Figma basics through their official tutorials',
                'Take "UX Design Fundamentals" on Interaction Design Foundation',
                'Read "Don\'t Make Me Think" by Steve Krug',
                'Practice: Create 5 wireframes and conduct 3 user interviews',
              ],
            },
            {
              title: 'Phase 5: Portfolio & Job Preparation (Weeks 19-24)',
              description: 'Build your PM portfolio and prepare for interviews',
              duration: '6 weeks',
              resources: [
                'Create a case study portfolio with 3-4 product scenarios',
                'Practice product sense questions on Exponent or IGotAnOffer',
                'Join PM communities (Product School, Mind the Product)',
                'Network: Conduct 10 informational interviews with PMs',
                'Apply to Associate PM or Junior PM roles',
              ],
            },
          ],
          estimatedTimeline: '5-6 months with 10-15 hours/week commitment',
        },
        'ui-ux-design': {
          targetRole: 'UI/UX Designer',
          transferableSkills: [
            { skill: 'Brand Strategy & Visual Communication', relevance: 'Directly applicable to UI design and brand consistency' },
            { skill: 'Customer Journey Mapping', relevance: 'Essential for UX research and user flow design' },
            { skill: 'Content Strategy & Copywriting', relevance: 'Critical for UX writing and microcopy' },
            { skill: 'A/B Testing & Optimization', relevance: 'Core skill for validating design decisions' },
            { skill: 'Presentation & Storytelling', relevance: 'Needed for design critiques and stakeholder buy-in' },
          ],
          skillGaps: [
            { skill: 'Design Tools (Figma, Sketch, Adobe XD)', importance: 'critical', currentLevel: 2, targetLevel: 8 },
            { skill: 'User Research Methods', importance: 'critical', currentLevel: 3, targetLevel: 8 },
            { skill: 'Information Architecture', importance: 'critical', currentLevel: 2, targetLevel: 7 },
            { skill: 'Interaction Design Principles', importance: 'important', currentLevel: 2, targetLevel: 7 },
            { skill: 'Prototyping & Animation', importance: 'important', currentLevel: 1, targetLevel: 6 },
            { skill: 'Accessibility Standards (WCAG)', importance: 'important', currentLevel: 1, targetLevel: 6 },
          ],
          learningPath: [
            {
              title: 'Phase 1: Design Fundamentals (Weeks 1-6)',
              description: 'Master visual design principles and design thinking',
              duration: '6 weeks',
              resources: [
                'Complete "Design Fundamentals" on Coursera or Skillshare',
                'Study color theory, typography, and layout principles',
                'Read "The Design of Everyday Things" by Don Norman',
                'Practice: Redesign 5 everyday app screens with annotations',
              ],
            },
            {
              title: 'Phase 2: Design Tools Mastery (Weeks 7-12)',
              description: 'Become proficient in industry-standard design tools',
              duration: '6 weeks',
              resources: [
                'Complete Figma\'s official tutorial series',
                'Take "UI Design Bootcamp" on Udemy',
                'Learn component libraries and design systems',
                'Practice: Create a complete design system for a fictional product',
              ],
            },
            {
              title: 'Phase 3: UX Research & Strategy (Weeks 13-18)',
              description: 'Learn to conduct research and validate design decisions',
              duration: '6 weeks',
              resources: [
                'Take "UX Research Methods" on Interaction Design Foundation',
                'Learn user interview techniques and usability testing',
                'Study information architecture and user flows',
                'Practice: Conduct 5 user interviews and create journey maps',
              ],
            },
            {
              title: 'Phase 4: Interaction & Prototyping (Weeks 19-22)',
              description: 'Build interactive prototypes and micro-interactions',
              duration: '4 weeks',
              resources: [
                'Learn advanced Figma prototyping features',
                'Study animation principles for UI (Principle, ProtoPie)',
                'Explore accessibility guidelines (WCAG 2.1)',
                'Practice: Create 3 high-fidelity interactive prototypes',
              ],
            },
            {
              title: 'Phase 5: Portfolio & Career Launch (Weeks 23-28)',
              description: 'Build a compelling portfolio and land your first role',
              duration: '6 weeks',
              resources: [
                'Create a portfolio website with 4-5 case studies',
                'Join design communities (Dribbble, Behance, Designer Hangout)',
                'Practice design challenges on Daily UI',
                'Network: Attend 3 design meetups or conferences',
                'Apply to Junior UX Designer or Product Designer roles',
              ],
            },
          ],
          estimatedTimeline: '6-7 months with 12-18 hours/week commitment',
        },
        'data-analytics': {
          targetRole: 'Data Analyst',
          transferableSkills: [
            { skill: 'Campaign Performance Analysis', relevance: 'Directly translates to business metrics analysis' },
            { skill: 'Google Analytics & Marketing Tools', relevance: 'Foundation for advanced analytics tools' },
            { skill: 'Data Visualization & Reporting', relevance: 'Core skill for presenting insights to stakeholders' },
            { skill: 'Customer Segmentation', relevance: 'Essential for cohort analysis and user behavior studies' },
            { skill: 'ROI Calculation & Business Metrics', relevance: 'Critical for measuring business impact' },
          ],
          skillGaps: [
            { skill: 'SQL & Database Querying', importance: 'critical', currentLevel: 2, targetLevel: 8 },
            { skill: 'Python or R for Data Analysis', importance: 'critical', currentLevel: 1, targetLevel: 7 },
            { skill: 'Statistical Analysis & Hypothesis Testing', importance: 'critical', currentLevel: 2, targetLevel: 7 },
            { skill: 'Data Visualization Tools (Tableau, Power BI)', importance: 'important', currentLevel: 3, targetLevel: 8 },
            { skill: 'Excel Advanced Functions', importance: 'important', currentLevel: 5, targetLevel: 8 },
            { skill: 'ETL Processes & Data Pipelines', importance: 'nice-to-have', currentLevel: 1, targetLevel: 5 },
          ],
          learningPath: [
            {
              title: 'Phase 1: SQL Mastery (Weeks 1-6)',
              description: 'Become proficient in querying and manipulating data',
              duration: '6 weeks',
              resources: [
                'Complete "SQL for Data Analysis" on Mode Analytics',
                'Practice on SQLZoo and LeetCode SQL problems',
                'Learn joins, subqueries, window functions, and CTEs',
                'Practice: Solve 50 SQL challenges of increasing difficulty',
              ],
            },
            {
              title: 'Phase 2: Python for Data Analysis (Weeks 7-12)',
              description: 'Learn Python libraries for data manipulation and analysis',
              duration: '6 weeks',
              resources: [
                'Complete "Python for Data Science" on DataCamp or Coursera',
                'Master Pandas, NumPy, and Matplotlib libraries',
                'Learn Jupyter Notebooks for analysis workflows',
                'Practice: Complete 10 data analysis projects on Kaggle',
              ],
            },
            {
              title: 'Phase 3: Statistics & Analysis (Weeks 13-18)',
              description: 'Build statistical foundation for data-driven insights',
              duration: '6 weeks',
              resources: [
                'Take "Statistics for Data Science" on Khan Academy or Coursera',
                'Learn hypothesis testing, A/B testing, and regression analysis',
                'Study probability distributions and confidence intervals',
                'Practice: Analyze 5 real datasets and present findings',
              ],
            },
            {
              title: 'Phase 4: Data Visualization (Weeks 19-22)',
              description: 'Master tools to communicate insights effectively',
              duration: '4 weeks',
              resources: [
                'Complete Tableau Desktop Specialist certification',
                'Learn Power BI through Microsoft Learn',
                'Study data storytelling principles',
                'Practice: Create 10 dashboards for different business scenarios',
              ],
            },
            {
              title: 'Phase 5: Portfolio & Job Search (Weeks 23-28)',
              description: 'Build portfolio and prepare for analyst interviews',
              duration: '6 weeks',
              resources: [
                'Create a GitHub portfolio with 5-6 analysis projects',
                'Build a personal website showcasing your work',
                'Practice case interviews and SQL technical screens',
                'Network: Join data communities (Locally Optimistic, Data Council)',
                'Apply to Junior Data Analyst or Business Analyst roles',
              ],
            },
          ],
          estimatedTimeline: '6-7 months with 15-20 hours/week commitment',
        },
      };

      setAnalysis(results[targetPath]);
      setStep('results');
    }, 2000);
  };

  const resetForm = () => {
    setStep('input');
    setCurrentRole('');
    setExperience('');
    setSkills('');
    setInterests('');
    setAnalysis(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            AI Career Transition Assistant
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get a personalized roadmap to switch careers with clear skill gaps and actionable learning paths
          </p>
        </div>

        {/* Input Form */}
        {step === 'input' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e.target.value)}
                  placeholder="e.g., Marketing Manager, Content Strategist"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience
                </label>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g., 5 years in digital marketing"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Skills & Tools
                </label>
                <textarea
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="e.g., Google Analytics, SEO, Content Strategy, Campaign Management, Social Media Marketing, Email Marketing, A/B Testing"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-900 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Interests & Motivations
                </label>
                <textarea
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g., I love analyzing user behavior and want to work more closely with product teams. Interested in data-driven decision making."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-900 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Target Career Path
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'product-management', label: 'Product Management', icon: '🎯' },
                    { value: 'ui-ux-design', label: 'UI/UX Design', icon: '🎨' },
                    { value: 'data-analytics', label: 'Data Analytics', icon: '📊' },
                  ].map((path) => (
                    <button
                      key={path.value}
                      onClick={() => setTargetPath(path.value as CareerPath)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        targetPath === path.value
                          ? 'border-indigo-500 bg-indigo-50 shadow-md'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{path.icon}</div>
                      <div className="text-sm font-semibold text-gray-900">{path.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={analyzeCareerTransition}
                disabled={!currentRole || !experience || !skills}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Analyze My Career Transition
              </button>
            </div>
          </div>
        )}

        {/* Analyzing State */}
        {step === 'analyzing' && (
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Profile...</h2>
            <p className="text-gray-600">Mapping your skills and creating a personalized roadmap</p>
          </div>
        )}

        {/* Results */}
        {step === 'results' && analysis && (
          <div className="space-y-6">
            {/* Header with Reset */}
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Your Personalized Roadmap to {analysis.targetRole}
              </h2>
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Start Over
              </button>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium opacity-90 mb-1">Estimated Timeline</div>
                  <div className="text-2xl font-bold">{analysis.estimatedTimeline}</div>
                </div>
                <div className="text-5xl">⏱️</div>
              </div>
            </div>

            {/* Transferable Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">✅</span>
                <h3 className="text-2xl font-bold text-gray-900">Your Transferable Skills</h3>
              </div>
              <div className="space-y-4">
                {analysis.transferableSkills.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
                    <div className="font-semibold text-gray-900 mb-1">{item.skill}</div>
                    <div className="text-sm text-gray-600">{item.relevance}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Gaps */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📈</span>
                <h3 className="text-2xl font-bold text-gray-900">Skills to Develop</h3>
              </div>
              <div className="space-y-5">
                {analysis.skillGaps.map((gap, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{gap.skill}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            gap.importance === 'critical'
                              ? 'bg-red-100 text-red-700'
                              : gap.importance === 'important'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {gap.importance}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {gap.currentLevel}/10 → {gap.targetLevel}/10
                      </div>
                    </div>
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute h-full bg-gray-400 rounded-full"
                        style={{ width: `${(gap.currentLevel / 10) * 100}%` }}
                      />
                      <div
                        className="absolute h-full bg-indigo-500 rounded-full opacity-30"
                        style={{ width: `${(gap.targetLevel / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Path */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🗺️</span>
                <h3 className="text-2xl font-bold text-gray-900">Your Step-by-Step Learning Path</h3>
              </div>
              <div className="space-y-6">
                {analysis.learningPath.map((phase, idx) => (
                  <div key={idx} className="relative">
                    {idx !== analysis.learningPath.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-indigo-200" />
                    )}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="bg-indigo-50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{phase.title}</h4>
                            <span className="text-sm font-medium text-indigo-600 bg-white px-3 py-1 rounded-full">
                              {phase.duration}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{phase.description}</p>
                          <div className="space-y-2">
                            <div className="text-sm font-semibold text-gray-900">Resources:</div>
                            <ul className="space-y-2">
                              {phase.resources.map((resource, ridx) => (
                                <li key={ridx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <span className="text-indigo-600 mt-0.5">•</span>
                                  <span>{resource}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
              <p className="text-lg opacity-90 mb-6">
                Save this roadmap and begin with Phase 1 today. Consistency is key!
              </p>
              <button
                onClick={() => window.print()}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Print or Save This Roadmap
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

