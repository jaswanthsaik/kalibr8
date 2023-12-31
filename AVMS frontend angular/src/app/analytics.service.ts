import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private baseUrl = 'https://kalibr8analyticspoc.azurewebsites.net';
  private apiUrl = `${this.baseUrl}/Dashboard/v2/Accounts`;

  constructor(private http: HttpClient) { }

  getAccounts(flDeleted: number, idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };

    const params = {
      flDeleted: flDeleted.toString(),
      idCompany: idCompany.toString()
    };

    return this.http.get<any>(this.apiUrl, { headers: headers, params: params });
  }

  private subscriptionUrl = `${this.baseUrl}/Dashboard/v2/Subscriptions`;

  getSubscriptions(flDeleted: number, idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };

    const params = {
      flDeleted: flDeleted.toString(),
      idCompany: idCompany.toString()
    };

    return this.http.get<any>(this.subscriptionUrl, { headers: headers, params: params });
  }

  private resourceGroupUrl = `${this.baseUrl}/Dashboard/v2/ResourceGroup`;

  getResourceGroup(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };

  
    const params = {
      idCompany: idCompany.toString()
    };
  
    return this.http.get<any>(this.resourceGroupUrl, { headers: headers, params: params });
  }
  
  private instanceUrl = `${this.baseUrl}/Dashboard/v2/Instance`;
  
  getInstance(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };

  
    const params = {
      idCompany: idCompany.toString()
    };
  
    return this.http.get<any>(this.instanceUrl, { headers: headers, params: params });
  }
  
  private scheduledInstanceUrl = `${this.baseUrl}/Dashboard/v2/ScheduledInstance`;
  getScheduledInstance(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };

  
    const params = {
      idCompany: idCompany.toString()
    };
  
    return this.http.get<any>(this.scheduledInstanceUrl, { headers: headers, params: params });
  }
  private scaledInstanceUrl = `${this.baseUrl}/Dashboard/v2/ScaledInstance`;
  getScaledInstance(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };
  
  
    const params = {
      idCompany: idCompany.toString()
    };
  
    return this.http.get<any>(this.scaledInstanceUrl, { headers: headers, params: params });

  }
  private scheduledInstanceInDaysUrl = `${this.baseUrl}/Dashboard/v2/ScheduledInstanceInDays`;
  
  getScheduledInstanceInDays(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };
    const params = {
      idCompany: idCompany.toString()
    };
    return this.http.get<any>(this.scheduledInstanceInDaysUrl, { headers: headers, params: params });
  }

  private scaledInstanceInDaysUrl = `${this.baseUrl}/Dashboard/v2/ScaledInstanceInDays`;
  
  getScaledInstanceInDays(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };
    const params = {
      idCompany: idCompany.toString()
    };
    return this.http.get<any>(this.scaledInstanceInDaysUrl, { headers: headers, params: params });
  }

  private peakUsageResourceUrl = `${this.baseUrl}/Dashboard/v2/PeakUsageResource`;
  
  getPeakUsageResource(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };
    const params = {
      idCompany: idCompany.toString()
    };
    return this.http.get<any>(this.peakUsageResourceUrl, { headers: headers, params: params });
  }
  private IdleUsageResourceUrl = `${this.baseUrl}/Dashboard/v2/IdleUsageResource`;

  getIdleUsageResource(idCompany: number): Observable<any> {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2thbGlicjhkZXYuYjJjbG9naW4uY29tLzA5YzU4MjcxLWRjMGYtNDNiMS05NzdmLWQ5MDI5NzM0Yjg2Mi92Mi4wLyIsInN1YiI6ImE4MDQ5NWNmLWNjMDEtNDIyYy1hYzQ2LWU4OGM1YTRkODE4OCIsImF1ZCI6ImUzNTU0MDhmLWNlZmItNDYwOS1hY2E4LWE2ZjM1MWU2NmQ5NSIsImV4cCI6MTY5NjA2OTE3MSwibm9uY2UiOiIwMDU5NThiNC1mOWQ5LTQxOTctYmUyZC04YWRjNGIzN2Q5MWMiLCJpYXQiOjE2OTYwNjU1NzEsImF1dGhfdGltZSI6MTY5NjA2NTU2OSwib2lkIjoiYTgwNDk1Y2YtY2MwMS00MjJjLWFjNDYtZTg4YzVhNGQ4MTg4IiwibmFtZSI6IkRFTU8gVVNFUiIsImdpdmVuX25hbWUiOiJERU1PIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiZW1haWxzIjpbIkVuc2FydGVzdEBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfU2lnbkluIiwiYXRfaGFzaCI6Ino3dXRYRFBRclRtSDA0TFdOS0RGSlEiLCJuYmYiOjE2OTYwNjU1NzF9.nh6ZyenwNiNzeIp-AW8KLNhw5BQEGKXETauog7AoeLlk-IekrgeoBY01ydJGiK6QXTOFx5U01xCUCtGSHKTzo_VGbd6g-WEvu6vX02ua1sbJROQxtTTcec_2AVQAyX0DQ80kURZrJluSvHLlog3wClKVEmKvto6pVRF-sLzNv6nSSFx45bPt4-AO2CcDG2GRQl4i2fbbxVkhuOb10XQJlMwoItumxQemCKqi0BmomNlEb2tE8aB2rnilYH1D9eVUM203C4nhWIoXuLU4nnM6lZq-GhxwGcfoBjI-gEGD_BGUtImbgoZr3iNmZBbnJxBZIp3h5nEmNy3FclVgCeTk6Q'
    };
    const params = {
      idCompany: idCompany.toString()
    };
    return this.http.get<any>(this.IdleUsageResourceUrl, { headers: headers, params: params });
  }

}

