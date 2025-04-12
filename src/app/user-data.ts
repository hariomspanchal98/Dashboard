export interface User {
  id: string;
  name: {
    first_name: string;
    last_name: string;
    handle: string;
  };
  status: string;
  email: string;
  role: string;
  license_used: number;
  teams: Team[];
  profileUrl?: string;
  selected?: boolean;
}

export interface Team {
  text_color: string;
  background_color: string;
  value: string;
}

export interface TableColumn {
  column_key: string;
  column_name: string;
  type: string;
  align: 'left' | 'right' | 'center'; // assuming alignment options
}
