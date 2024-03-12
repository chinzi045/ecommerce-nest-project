import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp' })
  created_at: string;

  @Column({ type: 'timestamp' })
  updated_at: string;
}
