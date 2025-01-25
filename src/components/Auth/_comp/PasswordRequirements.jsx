function PasswordRequirements() {
    return (
          <div className="space-x-6">
            <p className="text-medium">
              PASSWORD REQUIREMENTS:
            </p>

            <ul className="text-small">
              <li>
                at least 6 characters long
              </li>
              
              <li>
                at least 1 number <sup>(0-9)</sup>
              </li>

              <li>
                at least 1 uppercase letter <sup>(A-Z)</sup>
              </li>
            </ul>
          </div>
    )
}

export default PasswordRequirements;