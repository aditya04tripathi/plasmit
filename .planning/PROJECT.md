# PROJECT.md - PlasmIT Healthcare IT Vector

## Project Context
PlasmIT is developing **PiMed (Smart ICU on Mobile™)**, a next-generation connected digital care platform designed to revolutionize critical care. The core objective is to shift the medical paradigm from "Physical Rounds" (periodic bedside visits) to "Continuous Connected Rounds" (24/7 remote monitoring and intervention).

### Core Value
**Save human lives by democratizing world-class critical care through 24/7 connected monitoring, AI-driven anomaly detection, and seamless interoperability.**

### Objectives
- Enable doctors to deliver care from any location via mobile devices.
- Integrate real-time data from medical devices using proprietary AI/ML edge devices.
- Ensure absolute data integrity and compliance using a blockchain underpinning.
- Maintain global interoperability using FHIR standards.
- Reduce ICU mortality by up to 50% and ICU OPEX by 25%.

### Constraints & Boundaries
- **Compliance:** Must adhere to strict healthcare data regulations (HIPAA/GDPR equivalent).
- **Interoperability:** Strict adherence to FHIR standards.
- **Infrastructure:** High availability and fault tolerance are non-negotiable for critical care.
- **Scope:** Focuses on Critical Care/ICU, Emergency, and Home Care transition.

## Requirements

### Validated
(Inferred from existing codebase map)
- ✓ [Existing capability 1] — [TBD based on map analysis]
- ✓ [Existing capability 2] — [TBD based on map analysis]

### Active (Hypotheses)
- [ ] **CORE-01**: Real-time streaming of vitals from medical devices to mobile devices.
- [ ] **CORE-02**: AI/ML-enabled anomaly detection and intelligent alerting.
- [ ] **CORE-03**: Blockchain-based secure data storage and audit trail.
- [ ] **CORE-04**: FHIR-compliant data exchange for interoperability.
- [ ] **UI-01**: Integrated Health Dashboard with Case Prioritization (Triage).
- [ ] **UI-02**: Stakeholder-centric views (Doctor, Nurse, Admin).
- [ ] **COLLAB-01**: Real-time interdisciplinary collaboration tools.
- [ ] **PATH-01**: Integrated and guided clinical pathways for abnormality response.
- [ ] **WALLET-01**: Patient "Health Wallet" for accessible health records.

### Out of Scope
- [General Wellness Apps] — Focus is on critical and acute care.
- [Hardware Manufacturing] — Focus is on the software platform and edge device integration logic.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| FHIR Standard | Ensure global interoperability and future-proof data exchange | — Pending |
| Blockchain Layer | Guarantee data integrity and non-repudiation in critical care | — Pending |
| AI/ML at Edge | Reduce latency for abnormality detection and reduce cloud load | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-09 after initialization*
