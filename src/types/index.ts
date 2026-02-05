// Match Types
export type MatchFormat = 'Test' | 'ODI' | 'T20' | 'T10' | 'Other';
export type MatchStatus = 'scheduled' | 'live' | 'completed' | 'postponed' | 'cancelled';

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo?: string;
  country?: string;
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  country: string;
  capacity?: number;
}

export interface Player {
  id: string;
  name: string;
  jersey?: number;
  role: 'batsman' | 'bowler' | 'allrounder' | 'wicket-keeper';
  avatar?: string;
  country?: string;
}

export interface BatsmanStats {
  player: Player;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  dotballs: number;
  strikeRate: number;
  status: 'not-out' | 'out' | 'batting';
  dismissal?: string;
}

export interface BowlerStats {
  player: Player;
  overs: number;
  runs: number;
  wickets: number;
  dots: number;
  maidens: number;
  economy: number;
}

export interface Innings {
  id: string;
  team: Team;
  inningsNumber: number;
  score: number;
  wickets: number;
  overs: number;
  balls: number;
  batsmen: BatsmanStats[];
  bowlers: BowlerStats[];
  penalty?: number;
  extras: {
    wides: number;
    noBalls: number;
    byes: number;
    legByes: number;
  };
}

export interface Ball {
  id: string;
  ballNumber: number;
  overNumber: number;
  runs: number;
  bowler: Player;
  batter: Player;
  commentary?: string;
  wicket?: boolean;
  dismissalType?: string;
  dismissedPlayer?: Player;
}

export interface Match {
  id: string;
  title: string;
  teams: [Team, Team];
  format: MatchFormat;
  status: MatchStatus;
  venue: Venue;
  startDate: Date;
  endDate?: Date;
  tossWinner: Team;
  tossDecision: 'bat' | 'bowl';
  innings: Innings[];
  currentInnings?: number;
  currentBall?: Ball;
  winner?: Team;
  margin?: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
