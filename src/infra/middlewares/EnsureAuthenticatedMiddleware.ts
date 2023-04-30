import { decode } from 'jsonwebtoken';

import { fail, forbidden, HttpResponse, ok } from '@core/infra/HttpResponse';
import { Middleware } from '@core/infra/Middleware';

import { AccessDeniedError } from '../factories/errors/AccessDeniedError';

type EnsureAuthenticatedMiddlewareRequest = {
	accessToken: string
}

type DecodedJwt = {
	sub: string
}

export class EnsureAuthenticatedMiddleware implements Middleware {

	async handle(
		request: EnsureAuthenticatedMiddlewareRequest
	): Promise<HttpResponse> {
		try {
			const { accessToken } = request;

			if (accessToken) {
				try {
					const decoded = decode(accessToken) as DecodedJwt;

					return ok({ userId: decoded.sub });
				} catch (err) {
					return forbidden(new AccessDeniedError());
				}
			}

			return forbidden(new AccessDeniedError());
		} catch (error) {
			return fail(error);
		}
	}
}
