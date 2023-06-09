const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Mutation {
        addMember(form: MemberInput): Member,
        updateMember(
            _id: ID,
            form: MemberInput
        ): Member!
        addVitalSign(form: VitalSignInput): VitalSign
        updateVitalSign(_id: ID, form: VitalSignInput): VitalSign
        login(username: String!, password: String!): AuthPayload
        logout: Void
        addMotivationalTip(form: TipInput): Tip
        addEmergencyAlert(severity: String!): EmergencyAlert
        resolveEmergencyAlert(alertId: ID!, resolution: String!): EmergencyAlert
        addChecklist(form: ChecklistInput): Checklist
    }
`

module.exports = typeDefs