import { DocumentType } from '@typegoose/typegoose';
import { CreateOfferDto, UpdateOfferDto } from './index.js';
import { OfferEntity } from './offer.entity.js';

export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  updateById(
    offerId: string,
    dto: UpdateOfferDto
  ): Promise<DocumentType<OfferEntity> | null>;
  find(count?: number): Promise<DocumentType<OfferEntity>[] | null>;
  findPremiumOffersByCity(city: string): Promise<DocumentType<OfferEntity>[] | null>;
  findFavoriteOffers(userId: string): Promise<DocumentType<OfferEntity>[] | null>;
  incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  findById(id: string): Promise<DocumentType<OfferEntity> | null>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
}
