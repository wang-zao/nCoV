export interface Case {
  id: number,
  latitude: number;
  longitude: number;
  amount: number;
  onsetAt: string;
  seekedAt: string;
  confirmedAt: string;
  diedAt: string;
  publicizedAt: string;
  province: string;
  city: string;
  county: string;
  hospital: string;
  address: string;
  activityHistory: string;
  age: string;
  gender: string;
  company: string;
  newsSource: string;
  subsequentNews: string;
  subsequentNewsSource: string;
  submittedBy: string;
  memo: string;
  isReviewed: boolean;
  reviewedBy: string;
}
