import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProvidersDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvailability = container.resolve(
      ListProvidersDayAvailabilityService,
    );

    const availability = await listProviderDayAvailability.execute({
      day,
      month,
      provider_id,
      year,
    });

    return response.json(availability);
  }
}
