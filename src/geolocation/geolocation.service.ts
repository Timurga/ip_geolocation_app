import { Injectable } from '@nestjs/common';
import * as geoip from 'geoip-lite';
import { isIP } from 'net';

@Injectable()
export class GeolocationService {
  lookupIp(ip: string): any {
    if (isIP(ip) === 0) {
      throw new Error(
        'Введен неправильный IP. Пожалуйста, проверьте его написание',
      );
    }

    const lookup = geoip.lookup(ip);
    if (!lookup) {
      throw new Error('Для этого IP данные не найдены');
    }

    return {
      lat: lookup.ll[0],
      lng: lookup.ll[1],
      country: lookup.country,
      city: lookup.city,
    };
  }
}
