export type BasicGood = {
  id: string;
  name?: string;
  barcode?: string;
  price?: string;
  num?: string | number;
  amount?: string | number;
};

export type BasicProgress = {
  key: string;
  time: string;
  rate: string;
  status: string;
  operator: string;
  cost: string;
};

export type MeasureDetials = {
  time: string;
  position: string;
  strainGaugeNumber: string;
  initialStrain: string;
  measuredStrain: string;
  measuredStress: string;
  caculatedStrain: string;
  ultimateStrength: string;
  warningStrength: string;
  safeType: number;
};
