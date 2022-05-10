import { Module  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthFtStrategy } from './auth/authFt.strategy';
import { UsersModule } from './users/users.module';
import { TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthFtStrategy],
})
export class AppModule {}
