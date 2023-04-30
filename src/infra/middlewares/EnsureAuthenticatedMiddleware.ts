import { decode } from 'jsonwebtoken';

import { fail, forbidden, HttpResponse, ok } from '@core/infra/HttpResponse';
import { Middleware } from '@core/infra/Middleware';

import { AccessDeniedError } from '../factories/errors/AccessDeniedError';

type EnsureAuthenticatedMiddlewareRequest = {
	bearer: string
}

type DecodedJwt = {
	sub: string
}

export class EnsureAuthenticatedMiddleware implements Middleware {

	async handle(
		request: EnsureAuthenticatedMiddlewareRequest
	): Promise<HttpResponse> {
		try {
			const { bearer } = request;

			if (bearer) {
				try {
					const token: string = bearer.replace('Bearer ', '');
					const decoded = decode(token) as DecodedJwt;

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
