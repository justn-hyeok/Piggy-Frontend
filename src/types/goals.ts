export interface Goal {
    id: number;
    name: string;
    description: string;
    amount: number;
    saved: number;
  }
  
  export interface NewGoal {
    name: string;
    description: string;
    amount: number;
  }