import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: 'users' })
class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  email: string;

  @Column({ default: 'user', type: 'varchar', length: 30 })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;