import { PrismaClient } from '@prisma/client';
import { countries } from './countries';

const prisma = new PrismaClient();

async function seed() {
	try {
		await prisma.emailType.createMany({
			data: [
				{ type_name: 'Personal email' },
				{ type_name: 'Work email ' },
				{ type_name: 'Business email ' },
				{ type_name: 'University email' },
				{ type_name: 'Other' },
			],
		});

		await prisma.phoneType.createMany({
			data: [
				{ type_name: 'Personal phone' },
				{ type_name: 'Landline phone' },
				{ type_name: 'Mobile phone/Cell phone' },
				{ type_name: 'Business phone' },
				{ type_name: 'Other' },
			],
		});

		await prisma.country.createMany({
			data: countries
		});

		await prisma.adressType.createMany({
			data: [
				{ type_name: 'Residential' },
				{ type_name: 'Business' },
				{ type_name: 'Office' },
				{ type_name: 'Apartment' },
				{ type_name: 'Commercial' },
				{ type_name: 'Industrial' },
				{ type_name: 'Government' },
				{ type_name: 'Institutional' },
				{ type_name: 'Educational' },
				{ type_name: 'Hospital' },
				{ type_name: 'Retail' },
				{ type_name: 'Restaurant' },
				{ type_name: 'Hotel' },
				{ type_name: 'Warehouse' },
				{ type_name: 'Farm' },
			]
		});

		console.log('Dados de seed inseridos com sucesso.');
	} catch (error) {
		console.error('Erro ao inserir dados de seed:', error);
	} finally {
		await prisma.$disconnect();
	}
}

seed();
