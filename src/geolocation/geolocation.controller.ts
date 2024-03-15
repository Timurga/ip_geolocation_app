import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { Response } from 'express';

@Controller()
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}

  @Get()
  async getGeolocation(@Query('ip') ip: string, @Res() res: Response) {
    try {
      const result = this.geolocationService.lookupIp(ip);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      if (
        error.message ===
        'Введен неправильный IP. Пожалуйста, проверьте его написание'
      ) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: error.message });
      } else if (error.message === 'Для этого IP данные не найдены') {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: error.message });
      } else {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Ошибка сервера' });
      }
    }
  }
}
