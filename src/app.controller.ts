import { Controller, Get, HttpStatus, Redirect, Req, UseGuards, Request, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'; 


@Controller('auth')
export class AppController {
  constructor( private readonly ss : AppService ) {}

  @Get('42')
  @UseGuards( AuthGuard('42') )
  async ftAuthLogin() : Promise<any>{
    return HttpStatus.OK;
  }

  @Get('42/redirect')
  @UseGuards( AuthGuard('42') )
   async ftAuthLoginRedirect ( @Req() req: Request ) : Promise<any>{
    const { user } = <any>req;
    return user;
  }

  @Get()
  getHello() : string 
  {
    return "Omar"
  }

}
