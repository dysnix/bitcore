import { Injectable } from '@angular/core';

@Injectable()
export class DefaultProvider {
  private defaults: {
    '%CHAIN%': string;
    '%API_PREFIX%': string;
    '%API_HOST_DEFAULT%': string;
    '%NETWORK%': string;
    '%NUM_BLOCKS%': string;
  } = {
    '%CHAIN%': process.env.CHAIN || 'BTC',
    '%API_PREFIX%': process.env.API_PREFIX || '/api',
    '%API_HOST_DEFAULT%': process.env.API_HOST_DEFAULT || 'https://api.bitcore.io/api',
    '%NETWORK%': process.env.NETWORK || 'mainnet',
    '%NUM_BLOCKS%': process.env.NUM_BLOCKS || '15'
  };

  constructor() {}

  public getDefault(str: string): string {
    return this.defaults[str] !== undefined ? this.defaults[str] : str;
  }

  public setDefault(str: string, value: any): void {
    this.defaults[str] = value;
  }
}
