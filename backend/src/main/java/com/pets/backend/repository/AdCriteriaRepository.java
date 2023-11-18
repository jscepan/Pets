package com.pets.backend.repository;

import com.pets.backend.models.Ad;
import com.pets.backend.models.AdPage;
import com.pets.backend.models.AdSearchCriteria;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

@Repository
public class AdCriteriaRepository {

    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public AdCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = this.entityManager.getCriteriaBuilder();
    }

    public Page<Ad> findAllWithFilters(AdPage adPage, AdSearchCriteria adSearchCriteria) {
        // odredimo da ce rezultat naseg queriaja biti klase Ad
        CriteriaQuery<Ad> criteriaQuery = criteriaBuilder.createQuery(Ad.class);
        // zatim zelimo da dobijemo rezultate
        Root<Ad> adRoot = criteriaQuery.from(Ad.class);
        Predicate predicate = getPredicate(adSearchCriteria, adRoot);
        criteriaQuery.where(predicate);
        setOrder(adPage, criteriaQuery, adRoot);
        TypedQuery<Ad> typedQuery = entityManager.createQuery(criteriaQuery);
        long adCount = typedQuery.getResultList().size();
        typedQuery.setFirstResult(adPage.getPageNumber() * adPage.getPageSize());
        typedQuery.setMaxResults(adPage.getPageSize());
        List<Ad> content = typedQuery.getResultList();

        Pageable pageable = getPageable(adPage);
//        long adCount = getAdsCount(predicate);
        return new PageImpl<>(content, pageable, adCount);
    }

    private Predicate getPredicate(AdSearchCriteria adSearchCriteria, Root<Ad> adRoot) {
        List<Predicate> predicates = new ArrayList<>();
//        if (Objects.nonNull(adSearchCriteria.getTitle())) {
//            predicates.add(criteriaBuilder.like(adRoot.get("title"), "%" + adSearchCriteria.getTitle() + "%"));
//        }
//        if (Objects.nonNull(adSearchCriteria.getDescription())) {
//            predicates.add(criteriaBuilder.like(adRoot.get("description"), "%" + adSearchCriteria.getDescription() + "%"));
//        }
        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }

    private void setOrder(AdPage adPage, CriteriaQuery<Ad> criteriaQuery, Root<Ad> adRoot) {
        if (adPage.getSortDirection().equals(Sort.Direction.ASC)) {
            criteriaQuery.orderBy(criteriaBuilder.asc(adRoot.get(adPage.getSortBy())));
        } else {
            criteriaQuery.orderBy(criteriaBuilder.desc(adRoot.get(adPage.getSortBy())));
        }
    }

    private Pageable getPageable(AdPage adPage) {
        Sort sort = Sort.by(adPage.getSortDirection(), adPage.getSortBy());
        return PageRequest.of(adPage.getPageNumber(), adPage.getPageSize(), sort);
    }

//    private long getAdsCount(Predicate predicate) {
//        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
//        Root<Ad> countRoot = countQuery.from(Ad.class);
//        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate);
//        TypedQuery<Long> typedCountQuery = entityManager.createQuery(countQuery);
//        return typedCountQuery.getSingleResult();
//    }
}
