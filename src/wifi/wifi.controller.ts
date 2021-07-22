import { Controller, Get, Post } from '@nestjs/common';

@Controller('ZAutomation/api/v1/system')
export class WifiController {
  @Get('connectionType')
  connectionType() {
    return {
      code: 200,
      data: {
        currentConnection: 'wifi',
        availableConnections: ['ethernet'],
        possibleConnections: ['ethernet', 'wifi', 'mobile'],
      },
      error: null,
      message: '200 OK',
    };
  }

  @Get('wifiCli/settings')
  wifiCli() {
    return {
      data: [
        {
          saved: false,
          current: false,
          channel: 1,
          essid: 'Beeline_2G_FF3884',
          security: 'WPA1PSKWPA2PSK',
          encryption: 'TKIPAES',
          signal: 10,
        },
        {
          saved: false,
          current: false,
          channel: 1,
          essid: '1043ND',
          security: 'WPA1PSKWPA2PSK',
          encryption: 'AES',
          signal: 10,
        },
        {
          saved: true,
          current: true,
          // saved: false,
          // current: false,
          channel: 1,
          essid: 'MGTS_GPON_0722',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 20,
        },
        {
          saved: false,
          current: false,
          channel: 3,
          essid: 'MGTS_GPON_279F',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 10,
        },
        {
          saved: false,
          current: false,
          channel: 3,
          essid: 'MGTS_GPON_22AD',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 0,
        },
        {
          saved: false,
          current: false,
          channel: 4,
          essid: 'RT-WiFi-B7B5',
          security: 'WPA1PSKWPA2PSK',
          encryption: 'TKIPAES',
          signal: 5,
        },
        {
          saved: false,
          current: false,
          channel: 6,
          essid: 'R13_Guest_2.4',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 24,
        },
        {
          saved: false,
          current: false,
          channel: 7,
          essid: 'MGTS_GPON_1455',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 70,
        },
        {
          saved: false,
          current: false,
          channel: 7,
          essid: 'ZioN',
          security: 'WPA1PSKWPA2PSK',
          encryption: 'TKIPAES',
          signal: 15,
        },
        {
          saved: false,
          current: false,
          channel: 8,
          essid: 'MGTS_GPON_060D',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 0,
        },
        {
          saved: false,
          current: false,
          channel: 8,
          essid: 'MGTS_GPON_1B5D',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 0,
        },
        {
          saved: false,
          current: false,
          channel: 8,
          essid: 'Behter',
          security: 'WPA2PSK',
          encryption: 'TKIPAES',
          signal: 0,
        },
        {
          saved: false,
          current: false,
          channel: 9,
          essid: 'aivs',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 70,
        },
        {
          saved: false,
          current: false,
          channel: 9,
          essid: 'Keenetic-2977',
          security: 'WPA2PSK',
          encryption: 'TKIPAES',
          signal: 15,
        },
        {
          saved: false,
          current: false,
          channel: 10,
          essid: 'RPi-aivs',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 44,
        },
        {
          saved: false,
          current: false,
          channel: 10,
          essid: 'MGTS_GPON_4261',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 60,
        },
        {
          saved: false,
          current: false,
          channel: 10,
          essid: 'RPi3-ed9f',
          security: 'WPA2PSK',
          encryption: 'AES',
          signal: 34,
        },
        {
          saved: false,
          current: false,
          channel: 11,
          essid: 'RT-WiFi-DC40',
          security: 'WPA1PSKWPA2PSK',
          encryption: 'TKIPAES',
          signal: 0,
        },
      ],
      code: 200,
      message: '200 OK',
      error: null,
    };
  }

  @Post('wifiCli/settings')
  connect() {
    return {
      code: 200,
      message: '200 OK',
      error: null,
    };
  }

  @Get('networkStatus')
  networkStatus() {
    return {
      code: 200,
      data: {
        globalAccess: true,
        mqttAccess: true,
        lkkAccess: false,
      },
    };
  }
  @Get('first-access')
  firstAccess() {
    return {
      data: {
        firstaccess: false,
        remote_id: 175564,
        ip_address: '192.168.1.9',
      },
      code: 200,
      message: '200 OK',
      error: null,
    };
  }
}
